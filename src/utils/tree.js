
export const convertList = (arr) => {
    let map = {}, res = [], node;
  
    for (let i = 0; i < arr.length; i++) {
       map[arr[i].id] = i;
       arr[i].children = [];
    };
  
    for (let i = 0; i < arr.length; i++) {
       node = arr[i];
  
       if (node.parentId) {
          let pos = map[node.parentId];
          arr[pos].children.push(node);
       }
       else {
          res.push(node);
       }
    }

    return res;
  }