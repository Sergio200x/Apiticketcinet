import {getConettion_tickets} from '../database/conexion_tickets.js'
import { querys } from '../database/querys.js'

export const controller= {

    vista_tickets:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion_tickets()
                            const result=await pool
                             .request()
                             .query(querys.ticket)
                             res.json({
                                 info:{
                                      status:200,
                                       url:"/"},
                                       data:result.recordset})
                            
                            } catch (error) {
                            console.log(error)
                            }
                      
                    }



}


/**HOLALALALALAL*/