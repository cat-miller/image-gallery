import axios from "axios";

export default async function handler(req, res){
    const {method} = req;


    if (method === 'GET') {
        try {
            const config = {
                method: 'get',
                url: 'https://795723444716249:r8oSnHByZ-qrQvDmCN4HIAe2WW4@api.cloudinary.com/v1_1/codeandcats/resources/search?with_field=tags',
                headers: { }
            };

             const apiCall = await axios(config)
            //return res.send(JSON.stringify(apiCall.data))

            res.status(200).json(apiCall.data);
        } catch (error) {
            res.status(400).json({ success: false });
        }

    }

}