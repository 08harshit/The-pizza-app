import express, { NextFunction, Request, Response } from "express";
import { Ingredient } from '../models/ingredients';

export const getIngredients = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ingredients = await Ingredient.findAll();
        console.log(ingredients);
        res.status(200).json(ingredients);
    }


    catch (err) {
        console.log(err.message)
        res.status(500)
    }



} 