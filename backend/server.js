const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");
const login = require("./models/Login");
const signup = require("./models/Signup");

require("dotenv").config(".env");
const app = express();
const port = 7000;
connectDb();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

//Login api
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  signup
    .findOne({ email: email })
    .then((result) => {
      if (result) {
        if (result.password === password) res.send("User authenticated.");
        else res.send("Wrong password.");
      } else res.send("user dose not exist");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Signup API
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  //Checking if user already exists
  signup
    .findOne({ email: email })
    .then(async (result) => {
      if (result) {
        res.send("User already exists, Please Login.");
      } else {
        const credential = new signup({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        await credential.save();
        // Process the variable and send a response back to the frontend
        res.json({ message: "User registered successfully" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create a post request for /create-checkout-session
app.post("/create-checkout-session", async (req, res) => {
  try {
    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // For each item use the id to get it's information
      // Take that information and convert it to Stripe's format
      line_items: req.body.items.map(({ id, quantity }) => {
        const storeItem = storeItems.get(id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: quantity,
        };
      }),
      mode: "payment",
      // Set a success and cancel URL we will send customers to
      // These must be full URLs
      // In the next section we will setup CLIENT_URL
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (e) {
    // If there is an error send it to the client
    res.status(500).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
