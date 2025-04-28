import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
//   const offsetData = await prisma.post.findMany({
//     skip: 5,
//     take: 2,
//   });

      // cursor based pagination
    //   const cursorData = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2,
    //     cursor: {
    //         id: 15
    //     }
    // })
//   console.log(cursorData);


// sorting
const sortedData = await prisma.post.findMany({
    orderBy: {
        id: 'desc'
    },
    skip: 2,
    take: 2,
    where: {
        title: "title1"
    }
});

console.log("sorted data: ", sortedData);
};
paginationSorting();
