const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());


const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const ourWork = client.db("grass-marketing").collection("work");
    const ourBlog = client.db("grass-marketing").collection("blogs");
    const aGrass = client.db("grass-marketing").collection("grass");
    const vinyl = client.db("grass-marketing").collection("vinyl");
    const gym = client.db("grass-marketing").collection("gym");
    const deck = client.db("grass-marketing").collection("deck");
    const spc = client.db("grass-marketing").collection("spc");
    const ltv = client.db("grass-marketing").collection("lvt");
    const Laminate = client.db("grass-marketing").collection("laminate");
    const Carpet = client.db("grass-marketing").collection("carpet");
    const Wood = client.db("grass-marketing").collection("wood");
    const Rabber = client.db("grass-marketing").collection("rabber");
    const Wall = client.db("grass-marketing").collection("wall");
    const Pvc = client.db("grass-marketing").collection("pvc");
    const Enquiry = client.db("grass-marketing").collection("enquiry");
    const Massage = client.db("grass-marketing").collection("massage");
    const Sampls = client.db("grass-marketing").collection("user-sample");
    const user = client.db("grass-marketing").collection("user");
    const grassSub = client.db("grass-marketing").collection("/grass-sub-product");
    const football = client.db("grass-marketing").collection("/football");
    const vinylSub = client.db("grass-marketing").collection("/vinyl-sub-product");
    const gymSub = client.db("grass-marketing").collection("/gym-sub-product");
    const decklSub = client.db("grass-marketing").collection("/deck-sub-product");
    const lvtSub = client.db("grass-marketing").collection("/lvt-sub-product");
    const pvcSub = client.db("grass-marketing").collection("/pvc-sub-product");
    const spcSub = client.db("grass-marketing").collection("/spc-sub-product");
    const wallSub = client.db("grass-marketing").collection("/wall-sub-product");
    const rabberSub = client.db("grass-marketing").collection("/rabber-sub-product");
    const woodSub = client.db("grass-marketing").collection("/wood-sub-product");
    const carpetSub = client.db("grass-marketing").collection("/carpet-sub-product");
    const laminateSub = client.db("grass-marketing").collection("/laminate-sub-product");
    const logo = client.db("grass-marketing").collection("logo");


    app.get('/logo', async (req, res) => {
      const result = await logo.find().toArray();
      res.send(result);
    })
    app.post('/logo', async (req, res) => {
      const logopost = req.body;
      const result = await logo.insertOne(logopost);
      req.send(result);

    })
    app.delete('/logo/:id',async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await logo.deleteOne(query);
      res.send(result);

    })

    app.get('/work', async (req, res) => {
      const result = await ourWork.find().toArray();
      res.send(result);

    });

    app.delete('/work/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ourWork.deleteOne(query);

      res.send(result);

    })
    app.post('/work', async (req, res) => {
      const workpost = req.body;
      const result = await ourWork.insertOne(workpost);
      res.send(result);
      console.log(result);

    })
    app.get('/blogs', async (req, res) => {
      const result = await ourBlog.find().toArray();
      res.send(result);
    })

    app.delete('/blogs/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ourBlog.deleteOne(query);

      res.send(result);

    })
    app.post('/blogs', async (req, res) => {
      const blogsposts = req.body;
      const result = await ourBlog.insertOne(blogsposts);
      res.send(result);

    });
    app.get('/grass', async (req, res) => {
      const result = await aGrass.find().toArray();
      res.send(result);
    })
    app.get('/football', async (req, res) => {
      const result = await football.find().toArray();
      res.send(result);
    })
    app.post('/grass', async (req, res) => {
      const grassproduct = req.body;
      const result = await aGrass.insertOne(grassproduct);
      res.send(result);

    });
    app.delete('/grass/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await aGrass.deleteOne(query);

      res.send(result);

    })
    app.get('/vinyl', async (req, res) => {
      const result = await vinyl.find().toArray();
      res.send(result);
    })
    app.delete('/vinyl/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await vinyl.deleteOne(query);

      res.send(result);

    })
    // that is vinly sub product 

    app.post('/vinyl', async (req, res) => {
      const vinylProduct = req.body;
      const result = await vinyl.insertOne(vinylProduct);
      res.send(result);

    });
    app.get('/gym', async (req, res) => {
      const result = await gym.find().toArray();
      res.send(result);
    })
    app.delete('/gym/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await gym.deleteOne(query);

      res.send(result);

    })
    app.post('/gym', async (req, res) => {
      const gymProduct = req.body;
      const result = await gym.insertOne(gymProduct);
      res.send(result);

    });
    app.get('/deck', async (req, res) => {
      const result = await deck.find().toArray();
      res.send(result);
    });
    app.delete('/deck/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await deck.deleteOne(query);

      res.send(result);

    })
    app.post('/deck', async (req, res) => {
      const deckProdct = req.body;
      const result = await deck.insertOne(deckProdct);
      res.send(result);

    });
    app.get('/spc', async (req, res) => {
      const result = await spc.find().toArray();
      res.send(result);
    });
    app.delete('/spc/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spc.deleteOne(query);

      res.send(result);

    })
    app.post('/spc', async (req, res) => {
      const spcproduct = req.body;
      const result = await spc.insertOne(spcproduct);
      res.send(result);

    });
    app.get('/lvt', async (req, res) => {
      const result = await ltv.find().toArray();
      res.send(result);
    });
    app.delete('/lvt/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ltv.deleteOne(query);

      res.send(result);

    })
    app.post('/lvt', async (req, res) => {
      const lvtProduct = req.body;
      const result = await ltv.insertOne(lvtProduct);
      res.send(result);

    });
    app.get('/laminate', async (req, res) => {
      const result = await Laminate.find().toArray();
      res.send(result);
    });
    app.delete('/laminate/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Laminate.deleteOne(query);

      res.send(result);

    })
    app.post('/laminate', async (req, res) => {
      const laminateP = req.body;
      const result = await Laminate.insertOne(laminateP);
      res.send(result);

    });
    app.get('/carpet', async (req, res) => {
      const result = await Carpet.find().toArray();
      res.send(result);
    })
    app.delete('/carpet/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Carpet.deleteOne(query);

      res.send(result);

    })
    app.post('/carpet', async (req, res) => {
      const carpetproduct = req.body;
      const result = await Carpet.insertOne(carpetproduct);
      res.send(result);

    });
    app.get('/wood', async (req, res) => {
      const result = await Wood.find().toArray();
      res.send(result);
    });
    app.delete('/wood/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Wood.deleteOne(query);

      res.send(result);

    })
    app.post('/wood', async (req, res) => {
      const woodproduct = req.body;
      const result = await Wood.insertOne(woodproduct);
      res.send(result);

    });
    app.get('/rabber', async (req, res) => {
      const result = await Rabber.find().toArray();
      res.send(result);
    });
    app.delete('/rabber/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Rabber.deleteOne(query);

      res.send(result);

    })
    app.post('/rabber', async (req, res) => {
      const rabberproduct = req.body;
      const result = await Rabber.insertOne(rabberproduct);
      res.send(result);

    });

    app.get('/wall', async (req, res) => {
      const result = await Wall.find().toArray();
      res.send(result);
    });
    app.delete('/wall/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Wall.deleteOne(query);

      res.send(result);

    })
    app.post('/wall', async (req, res) => {
      const wallp = req.body;
      const result = await Wall.insertOne(wallp);
      res.send(result);

    });

    app.get('/pvc', async (req, res) => {
      const result = await Pvc.find().toArray();
      res.send(result);
    });
    app.delete('/pvc/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Pvc.deleteOne(query);

      res.send(result);

    })
    app.post('/pvc', async (req, res) => {
      const pvcproduct = req.body;
      const result = await Pvc.insertOne(pvcproduct);
      res.send(result);

    });
    // sub Product post and Get 

    app.post("/grass-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await grassSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/grass-sub-product", async (req, res) => {
      const result = await grassSub.find.toArray();
      res.send(result);
    })
    app.delete("/grass-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await grassSub.deleteOne(query);

      res.send(result);

    })
    app.post("/vinyl-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await vinylSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/vinyl-sub-product", async (req, res) => {
      const result = await vinylSub.find.toArray();
      res.send(result);
    })
    app.delete("/vinyl-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await vinylSub.deleteOne(query);

      res.send(result);

    })
    app.post("/gym-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await gymSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/gym-sub-product", async (req, res) => {
      const result = await gymSub.find.toArray();
      res.send(result);
    })
    app.delete("/gym-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await gymSub.deleteOne(query);

      res.send(result);

    })
    app.post("/deck-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await decklSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/deck-sub-product", async (req, res) => {
      const result = await decklSub.find.toArray();
      res.send(result);
    })
    app.delete("/deck-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await decklSub.deleteOne(query);

      res.send(result);

    })
    app.post("/lvt-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await lvtSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/lvt-sub-product", async (req, res) => {
      const result = await lvtSub.find.toArray();
      res.send(result);
    })
    app.delete("/deck-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await lvtSub.deleteOne(query);

      res.send(result);

    })
    app.post("/spc-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await spcSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/spc-sub-product", async (req, res) => {
      const result = await spcSub.find.toArray();
      res.send(result);
    })
    app.delete("/spc-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spcSub.deleteOne(query);

      res.send(result);

    })
    app.post("/pvc-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await pvcSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/pvc-sub-product", async (req, res) => {
      const result = await pvcSub.find.toArray();
      res.send(result);
    })
    app.delete("/pvc-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await pvcSub.deleteOne(query);
      res.send(result);
    })
    app.post("/wall-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await wallSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/wall-sub-product", async (req, res) => {
      const result = await wallSub.find.toArray();
      res.send(result);
    })
    app.delete("/wall-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await wallSub.deleteOne(query);
      res.send(result);
    })
    app.post("/wood-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await woodSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/wood-sub-product", async (req, res) => {
      const result = await woodSub.find.toArray();
      res.send(result);
    })
    app.delete("/wood-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await woodSub.deleteOne(query);
      res.send(result);
    })
    app.post("/rabber-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await rabberSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/rabber-sub-product", async (req, res) => {
      const result = await rabberSub.find.toArray();
      res.send(result);
    })
    app.delete("/rabber-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await rabberSub.deleteOne(query);
      res.send(result);
    })
    app.post("/carpet-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await carpetSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/carpet-sub-product", async (req, res) => {
      const result = await carpetSub.find.toArray();
      res.send(result);
    })
    app.delete("/carpet-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await carpetSub.deleteOne(query);
      res.send(result);
    })
    app.post("/laminate-sub-product", async (req, res) => {
      const GrassSubProduct = req.body;
      const result = await laminateSub.insertOne(GrassSubProduct);
      res.send(result);
    })
    app.get("/laminate-sub-product", async (req, res) => {
      const result = await laminateSub.find.toArray();
      res.send(result);
    })
    app.delete("/laminate-sub-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await laminateSub.deleteOne(query);
      res.send(result);
    })



    app.get('/enquiry', async (req, res) => {
      const result = await Enquiry.find().toArray();
      res.send(result);
    });
    app.post('/enquiry', async (req, res) => {
      const enquirydata = req.body;

      const result = await Enquiry.insertOne(enquirydata);
      res.send(result);
      // console.log(result);
    })
    app.post('/massage', async (req, res) => {
      const massagedata = req.body;
      const result = await Massage.insertOne(massagedata);
      res.send(result);
      // console.log(result);
    })
    app.get('/massage', async (req, res) => {
      const result = await Massage.find().toArray();
      res.send(result);
      console.log(result);
    })
    app.delete('/massage/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await Massage.deleteOne(query);

      res.send(result);
    })
    app.post('/user-sample', async (req, res) => {
      const samplerequest = req.body;
      const result = await Sampls.insertOne(samplerequest);
      res.send(result);

    })
    app.delete('/user-sample/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await Sampls.deleteOne(query);

      res.send(result);
    })
    app.get('/user-sample', async (req, res) => {
      const result = await Sampls.find().toArray();
      res.send(result);
    })
    app.get('/user', async (req, res) => {
      const result = await user.find().toArray();
      res.send(result);
    })
    app.post('/user', async (req, res) => {
      const userData = req.body;
      const result = await user.insertOne(userData);
      res.send(result);
      console.log(userData);
    })
    // app.delete('/user/:id', async (req, res) => {
    //   const id = req.params.id;

    //   const query = { _id: new ObjectId(id) };
    //   const result = await user.deleteOne(query);

    //   res.send(result);
    // })
    app.get('/admin-stats', async (req, res) => {
      const totalWork = await ourWork.estimatedDocumentCount();
      const totalMassage = await Massage.estimatedDocumentCount();
      const totalBlog = await ourBlog.estimatedDocumentCount();
      const totalrequest = await Sampls.estimatedDocumentCount();
      const totalGrass = await aGrass.estimatedDocumentCount();
      const totalVinyl = await vinyl.estimatedDocumentCount();
      const totalGym = await gym.estimatedDocumentCount();
      const totalDeck = await deck.estimatedDocumentCount();
      const totalSpc = await spc.estimatedDocumentCount();
      const totalLtv = await ltv.estimatedDocumentCount();
      const totalLaminate = await Laminate.estimatedDocumentCount();
      const totalCarpet = await Carpet.estimatedDocumentCount();
      const totalWood = await Wood.estimatedDocumentCount();
      const totalRabber = await Rabber.estimatedDocumentCount();
      const totalWall = await Wall.estimatedDocumentCount();
      const totalPvc = await Pvc.estimatedDocumentCount();



      res.send({
        totalWork,
        totalMassage,
        totalBlog,
        totalrequest,
        totalGrass,
        totalVinyl,
        totalGym,
        totalDeck,
        totalSpc,
        totalLtv,
        totalLaminate,
        totalCarpet,
        totalWood,
        totalRabber,
        totalWall,
        totalPvc

      })
    })



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello grass-server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




