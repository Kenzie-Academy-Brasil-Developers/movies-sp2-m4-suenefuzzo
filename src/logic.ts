import { Request, Response } from "express";
import { client } from "./database";
import { QueryConfig, QueryResult } from "pg";
import { IMovie, TMovieRequest } from "./interfaces";

const createMovie = async (
  resquest: Request,
  response: Response
): Promise<Response> => {
  const movieData: TMovieRequest = resquest.body;

  const queryString: string = `
    INSERT INTO movies
        (name, category, duration, price)
    VALUES
        ($1, $2, $3, $4)
    RETURNING *;
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: Object.values(movieData),
  };

  const queryResult: QueryResult<IMovie> = await client.query(queryConfig);

  return response.status(201).json(queryResult.rows[0]);
};

const getMovies = async (resquest: Request, response: Response): Promise<Response> => {
    const queryString: string = `
        SELECT 
            * 
        FROM 
            movies;
    `

    const queryResult: QueryResult<IMovie> = await client.query(queryString)

    return response.status(200).json(queryResult.rows)
};

const getMovie = async (resquest: Request, response: Response): Promise<Response> => {
    const id: number = Number(resquest.params.id)

    const queryString: string = `
        SELECT 
            * 
        FROM 
            movies 
        WHERE 
            id = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id]
    }

    const queryResult: QueryResult<IMovie> = await client.query(queryConfig)

    return response.status(200).json(queryResult.rows[0])
};

// const updateMovie = async (resquest: Request, response: Response): Promise<Response> => {

// };

// const deleteMovie = async (resquest: Request, response: Response): Promise<Response> => {

// };

export { createMovie, getMovies, getMovie };
