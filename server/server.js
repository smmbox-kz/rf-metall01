import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Разрешаем CORS для всех запросов
app.use(express.json()); // Для парсинга JSON-тела запросов

// Эндпоинт для обработки заявок
app.post('/api/submit-lead', async (req, res) => {
    const { name, phone, sourceUrl } = req.body;

    if (!name || !phone || !sourceUrl) {
        return res.status(400).json({ success: false, message: 'Missing required fields: name, phone, sourceUrl' });
    }

    // Bitrix24 API Configuration (из .env файла)
    const B24_API_URL = process.env.B24_API_URL;
    const B24_API_KEY = process.env.B24_API_KEY;
    const B24_API_ADMIN = process.env.B24_API_ADMIN;

    if (!B24_API_URL || !B24_API_KEY || !B24_API_ADMIN) {
        console.error('Bitrix24 API credentials are not set in .env');
        return res.status(500).json({ success: false, message: 'Server configuration error: Bitrix24 API credentials missing.' });
    }

    const B24_URL = `${B24_API_URL}rest/${B24_API_ADMIN}/${B24_API_KEY}/`;

    try {
        // Создание лида в Bitrix24
        const leadData = {
            fields: {
                TITLE: `Заявка с сайта: ${sourceUrl}`,
                NAME: name,
                PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
                COMMENTS: `Заявка с сайта: ${sourceUrl}`,
                // Дополнительные поля, если нужны, например, SOURCE_ID
                // SOURCE_ID: 'WEB', // Пример
            },
            params: { "REGISTER_SONET_EVENT": "Y" }
        };

        const queryUrl = `${B24_URL}crm.lead.add`;
        const response = await fetch(queryUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });

        const result = await response.json();

        if (result.result) {
            // Добавление комментария к лиду (опционально, как в sendmail.php)
            const comments = `[B]Заявка от: ${name}[/B]\nТелефон: ${phone}\nИсточник: лид с: ${sourceUrl}\nСайт: [B]${sourceUrl}[/B]`;
            const commentData = {
                fields: {
                    ENTITY_ID: result.result,
                    AUTHOR_ID: B24_API_ADMIN,
                    ENTITY_TYPE: 'lead',
                    COMMENT: comments,
                }
            };
            const commentQueryUrl = `${B24_URL}crm.timeline.comment.add`;
            await fetch(commentQueryUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });

            res.json({ success: true, message: 'Lead successfully added to Bitrix24', leadId: result.result });
        } else {
            console.error('Bitrix24 API Error:', result);
            res.status(500).json({ success: false, message: 'Failed to add lead to Bitrix24', error: result.error_description || 'Unknown error' });
        }

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Node.js server running on port ${PORT}`);
});
