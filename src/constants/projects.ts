export interface project {
    title: string;
    description: string;
    tags: string[];
    preview?: string;
    sourcelink: string;
    imageLink: string;
}


export const projects: project[] = [
    {
        title: "Proof of Work Blockchain",
        description: "I created a proof of work blockchain using typescript and crypto-js. This project taught me a lot about how blockchains work and how people interact with them. This project consists of a simple, object-oriented implementation of a proof of work blockchain.",
        tags: ["Typescript", "Blockchain"],
        sourcelink: "https://github.com/pvwnthem/pow-blockchain",
        imageLink: "https://101blockchains.com/wp-content/uploads/2021/03/blockchain1a.png"
    },
    {
        title: "Encryption and Decryption Website",
        description: "I created a webiste using react, typescript, and crypto-js's subtle module. This project taught me lots about cryptography and how handling certain user interactions works in javascript. This projects consists of a full website which is fully functional and is hosted at https://crypt.2x1.dev",
        tags: ["Typescript", "Blockchain"],
        sourcelink: "https://github.com/pvwnthem/encryption-site",
        imageLink: "https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png"
    },

]
