const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Reservation = require('../models/Reservation');
const { Token } = require('../models/Token');
const { type } = require('express/lib/response');
const {auth} = require('../middlewares/auth');
const res = require('express/lib/response');


// ajouter une réservation

routes.post('/addres', async(req, res)=>{



    try {
       await Reservation.create(req.body)
       res.status(201).json({message: " Reservaionajouter aec succes"}) 
    } catch (error) {
        console.log(error.message);
    }
    })

// supprimer une réservation
    routes.delete('/deleteres/:id', async (req, res)=>{

        try {
            await Reservation.deleteOne({_id: req.params.id})
            res.status(201).json({message:"resrvation supermer avec succes"});
        } catch (error) {
            console.log(error.message);
        }
        
        
        })

        
    module.exports = routes;

    // get  une station  by name

    routes.get('/getname/:namestation', async ( req, res)=>{

        try {
            
        const oneComt = await Reservation.find({namestation:req.params.namestation});
        res.status(201).json(oneComt);
        
        } catch (error) {
          console.log(error.message);  
        }
        
        
        
        })