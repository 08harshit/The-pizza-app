import express, { NextFunction, Request, Response } from "express";
import { Pizza } from "../models/pizzas";

export const getPizza = async (req: Request, res: Response) => {
    try {
        const allPizzas = await Pizza.findAll();
        res.status(200).json(allPizzas);
    }



    catch (err:any) {
        console.log(err.message)
        res.status(500).json({ message: 'internal server error' })
    }
}