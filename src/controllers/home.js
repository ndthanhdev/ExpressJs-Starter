import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req, res) => {
    res.end("Server is running");
};