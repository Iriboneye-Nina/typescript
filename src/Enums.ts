//Numeric Enums: These are the most common form of enums where each member is assigned a numeric value
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// let move: Direction = Direction.Up;
// console.log(move); 

//String Enums: These enums are similar to numeric enums, but their values are strings instead of numbers.
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }


// let move: Direction = Direction.Left;
// console.log(move); 
//Heterogeneous Enums: These enums can contain both string and numeric values, though this usage is less common.
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES"
// }
// let result: BooleanLikeHeterogeneousEnum = BooleanLikeHeterogeneousEnum.Yes;
// console.log(result); 
//Reverse Mapping
//In numeric enums, TypeScript allows reverse mapping, meaning you can access the name of the enum using its value.
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }

// console.log(Direction[2]); 

//Constant Enums: These are removed during compilation, which can make the code smaller and faster.
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move = Direction.Up;
console.log(move)

//Computed Enums: These are enums where members are computed using expressions.
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}
