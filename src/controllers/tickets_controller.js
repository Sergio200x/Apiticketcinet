import {getConettion} from '../database/conexion.js'
import { querys } from '../database/querys.js'

export const tickets_controller= {

    vista_tickets:   async (req,res)=>
                    {
                        try {
                            const pool = await getConettion()
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