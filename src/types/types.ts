export type Protein = {
    id:number;
    name:string;
    image:string;
    description:string;
    price:number;
  }

  export type CartItem = Protein & {
    quantity:number;
  }

// Usando Interface
// interface Protein {
//     id:number;
//     name:string;
//     image:string;
//     description:string;
//     price:number;
//   }

// interface CartItem extends Protein{
//     price:number;
//   }


 //Utility Types
//  export type CartItem = Pick<Protein, 'id' | 'name' |'image'> &{
//     quantity:number
//  }

//Omite<Protein, 'id'> Omite esa propiedad o conjunto de propiedades.