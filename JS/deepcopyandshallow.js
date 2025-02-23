const original = {
    a: 1,
    b: { c: { d: { e: { f: 1212 } } } }
};

const shallowCopy = {
    ...original
    // ,
    // b: {
    //     ...original.b,
    //     c: {
    //         ...original.b.c,
    //         d: {
    //             ...original.b.c.d,
    //             e: {
    //                 ...original.b.c.d.e
    //             }
    //         }
    //     }
    // }
};
shallowCopy.b.c.d.e.f = 42;

console.log(original.b.c.d.e.f);
console.log(shallowCopy.b.c.d.e.f); 