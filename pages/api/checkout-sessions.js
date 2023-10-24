const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const line_items = []
            const AllItems = JSON.parse(req.body.products)

            for (let pro of AllItems) {
                line_items.push({
                    quantity: pro.quantity,
                    price_data: {
                        currency: 'USD',
                        product_data: { name: pro.product.title, images: [pro.product.image] },
                        unit_amount: pro.product.price * 100,
                    },
                })
            }
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: line_items,
                mode: 'payment',
                success_url: `${req.headers.origin}/successpayment?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            })
            
            res.redirect(303, session.url);
            console.log(session)
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }

    } else {
        res.status(404).json("GET")

    }
}