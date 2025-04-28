// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const deleteData = async () => {
    // const singleDelete = await prisma.post.delete({
    //     where: {
    //         // ekhane sobsomoy unique kichu dite hobe
    //         id: 1
    //     }
    // });

    const deleteMany = await prisma.post.deleteMany({
        where:{
            published:true
        }
    })

    console.log(deleteMany);
};

deleteData();