
import prisma from '@/libs/prismadb'

export interface IProductParams{
    category?: string | null;
    searchTerm?: string | null
}

export default async function getProducts(params:IProductParams) {
    try{

        const{category, searchTerm}= params;
        let searString = searchTerm;

        if(!searchTerm){
         searString = ''
        }

        let query:any ={}

        if(category){
             query.category = category
        }

        const products = await prisma.product.findMany({
            where:{
                ...query,

                OR:[
                    {
                        name:{
                               contains: searString,
                               mode: 'insensitive'
                         },
                         description:{
                            contains: searString,
                            mode: 'insensitive'
                         }
                    }
                ]
            },
            include:{
                reviews:{
                    include:{
                        user: true
                    },
                    orderBy:{
                        createdDate: 'desc'
                    }
                }
            }
        })

        return products;
    } catch(error: any){
        throw new Error(error)
    }
    
}