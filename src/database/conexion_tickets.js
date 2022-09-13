import sql from 'mssql';


const sqlConfig ={
user:process.env.DB_USER,
password:process.env.DB_PWD,
server:process.env.DB_IP,
database:process.env.DB_NAME,
port:parseInt(process.env.DB_PORT, 10),
options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

export async function getConettion_tickets(){ 

    try {
        const pool = await sql.connect(sqlConfig)
        return pool;
        
    } catch (error) {
        console.log(error)
    }

}



