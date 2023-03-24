// Exercício 2 - UpdateData

function updateData(currentObject: any, newDataObject: any): any {
    const result: any = {};
    for (const objectProps in currentObject) {
      if (newDataObject.hasOwnProperty(objectProps)) {
        result[objectProps] = newDataObject[objectProps];
      } else {
        result[objectProps] = currentObject[objectProps];
      }
    }
    return result;
  }

module.exports = updateData;
