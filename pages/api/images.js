import axios from "axios";

export default async function handler(req, res){
    const {method} = req;
    const username = process.env.CLOUDINARY_USERNAME;
    const password = process.env.CLOUDINARY_PASSWORD;

    if (method === 'GET') {
        try {
            const config = {
                method: 'get',
                url: `https://${username}:${password}@api.cloudinary.com/v1_1/codeandcats/resources/search?with_field=tags`,
                headers: { }
            };

             const apiCall = await axios(config)

            res.status(200).json(apiCall.data);
        } catch (error) {
            res.status(400).json({ success: false });
        }

    }

}