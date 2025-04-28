import { PrismaClient, UserRole } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async () => {

    // create single
    //   const result =await prisma.post.create({
//     data:{
//         title:"This is title2",
//         content:"This is content.....",
//         author:"Neelima"
//     }
//   })
//   console.log(result);


// create many
    // const createMany=await prisma.post.createMany({
    //     data:[
    //         {
    //             title:"title1",
    //                     content:"This is content.....",
    //                     author:"Neelima"  
    //         },
    //         {
    //             title:"title2",
    //                     content:"This is content.....",
    //                     author:"Neelima"  
    //         },
    //         {
    //             title:"title3",
    //                     content:"This is content.....",
    //                     author:"Neelima"  
    //         },
    //     ]
    // })

    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@ph.com",
    //         role: userRole.user
    //     }
    // });

//     const createProfile = await prisma.profile.create({
//         data: {
//             bio: "this is bio...",
//             userId: 1
//         }
//     })

//     const createCategory = await prisma.category.create({
//         data: {
//             name: "software engineering"
//         }
//     })

//     const createPost = await prisma.post.create({
//         data: {
//             title: "this is title 5",
//             content: "this is content of the post. 5",
//             authorId: 3,
//             postCategory: {
//                 create: [
//                     {
//                         categoryId: 1
//                     },
//                     {
//                         categoryId: 3
//                     },
//                     {
//                         categoryId: 4
//                     }
//                 ]
//             }
//         },
//         include: {
//             postCategory: true
//         }
//     })
//     console.log(createPost)
//     console.log(createUser)
//     console.log(createCategory)
    // console.log(createMany)

    // const createUser=await prisma.user.create({
    //     data:{
    //         username:"user2",
    //         email:"user2@gmail.com",
    //         role:UserRole.user
    //     }
    // })
    // console.log(createUser);
    // const createProfile=await prisma.profile.create({
    //     data:{
    //         bio:"This is bio...",
    //         userId:1
    //     }
    // })
    // 
    
    const createPost = await prisma.post.create({
        data: {
            title: "this is title 3",
            content: "this is content of the post. 3",
            authorId: 1,
            postCategory: {
                create:{
                    category:{
                        connect:{
                            id:1
                        }
                    }
                }
            }
        },
        include: {
            postCategory: false
        }
    })
    console.log(createPost)
}

main();