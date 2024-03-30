import prisma from '@/libs/prismadb';
import { data } from 'autoprefixer';
import moment from 'moment';

export default async function getGraphData() {
    try{
        //egt the start and end date 
        const startDate = moment().subtract(6, "days").startOf("day");
        const endDate = moment().endOf("day");

        //query the database to get order data grouped by created Date
        const result = await prisma.order.groupBy({
            by: ["createDate"],
            where: {
                createDate:{
                    gte: startDate.toISOString(),
                    lte: endDate.toISOString(),
                },
                status: "complete"
            },
            _sum: {
                amount:true,
            },
        });

    //Initialize on object to aggregate the data by day
    const aggregatedData:{
   [day: string]: {day: string; date: string; totalAmount: number};

    } ={};
    //create a clone of the start date to iterate over each day
    const currentDate = startDate.clone();

    //Iterate over
    while(currentDate <= endDate){
        //format the day as a string 
        const day = currentDate.format('dddd');
        console.log("day<<<" , day , currentDate);

        //Initialize the agrregete data for the day with the day , date and totalAmount
        aggregatedData[day] = {
            day,
            date: currentDate.format('yyyy-MM-DD'),
            totalAmount: 0,
        };
            currentDate.add(1, "day");
    }

    //calculate the total amount for each day by summing the order amounts 
    result.forEach((entry)=>{
        const day= moment(entry.createDate).format('dddd');
        const amount= entry._sum.amount || 0;
        aggregatedData[day].totalAmount += amount;
    });

    //convert the aggregatedData ogject to an sort it by date

    const formattedData = Object.values(aggregatedData).sort((a , b)=>
    moment(a.date).diff(moment(b.date))
    );


//Return the formatted data
 return formattedData;
} catch(error: any){
     throw new Error(error);
    }

}