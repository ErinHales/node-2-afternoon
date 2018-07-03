module.exports = {
    create: (req, res) => {
        var {name, description, price, image_url} = req.body;
        req.app.get("db").create_product([name, description, price, image_url]).then(() => res.status(200).send())
        .catch(error => {
            console.log("ERR: ", error);
            res.status(500).send({error});
        })
    },
    getOne: (req,res) => {
        var {id} = req.params;
        req.app.get("db").read_product(id).then(response => res.status(200).send(response))
        .catch(error => {
            console.log("ERR: ", error);
            res.status(500).send({error});
        })
    },
    getAll: (req,res) => {
        req.app.get("db").read_products().then(response => res.status(200).send(response))
        .catch(error => {
            console.log("ERR: ", error);
            res.status(500).send({error});
        })
    },
    update: (req,res) => {
        var {id} = req.params;
        var {description} = req.query;
        req.app.get("db").update_product(description, id).then(() => res.status(200).send())
        .catch(error => {
            res.status(500).send({error});
        })
    },
    delete: (req, res) => {
        var {id} = req.params;
        req.app.get("db").delete_product(id).then(() => res.status(200).send())
        .catch(error => {
            res.status(500).send({error});
        })
    }
}