import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async () => {
//   const result =await prisma.post.create({
//     data:{
//         title:"This is title2",
//         content:"This is content.....",
//         author:"Neelima"
//     }
//   })
//   console.log(result);

const getAllFromDB=await prisma.post.findMany()
console.log(getAllFromDB);
};

main();
