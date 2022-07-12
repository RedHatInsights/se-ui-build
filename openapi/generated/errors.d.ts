/**
   smart_events error codes

    ```ts
    apiCall.then((data) => {
        console.log(data?.data.items)
    }).catch((err) => {
      if(APIErrorCodes.ERROR_5 == err.response?.data.code) {
        // Handle error
      }
    })
    ```
*/
export declare const APIErrorCodes: {
    /** You tried to create an object which already exist in our repository*/
    ERROR_1: string;
    /** You tried a life cycle transition which is not allowed*/
    ERROR_2: string;
    /** We were unable to process your request. Please contact Red Hat support if the error persists.*/
    ERROR_3: string;
    /** You tried to create an object which already exist in our repository*/
    ERROR_4: string;
    /** You try to serialize a cloud event and something goes wrong, check if format follows specification*/
    ERROR_5: string;
    /** You try to deserialize a cloud event and something goes wrong, check if format follows specification*/
    ERROR_6: string;
    /** Something failed related with gateway execution or resolution*/
    ERROR_7: string;
    /** The request is not valid.*/
    ERROR_8: string;
    /** There was an internal exception. This is supposed not to be fixable by the user, so you should open a bug with all the information you have.*/
    ERROR_9: string;
    /** The user is not authorized to access the resource*/
    ERROR_16: string;
    /** You tried a life cycle transition which is not allowed*/
    ERROR_19: string;
    /** The Transformation Template for the Processor is invalid*/
    ERROR_22: string;
    /** The Processor is missing a Gateway definition.*/
    ERROR_23: string;
    /** The Processor Gateway definition is missing parameters.*/
    ERROR_24: string;
    /** The Processor Gateway type is not recognised.*/
    ERROR_25: string;
    /** One or more of the Processor Gateway parameters are invalid.*/
    ERROR_26: string;
    /** One or more of the Processor Gateway parameters are invalid.*/
    ERROR_27: string;
    /** A Processor cannot have both a Source and an Action Gateway defined.*/
    ERROR_28: string;
    /** Processor Source Gateways do not support Transformation Templates.*/
    ERROR_29: string;
    /** The specified ErrorHandler Action is unsupported.*/
    ERROR_30: string;
    /** Unable to deserialize Filter definition.*/
    ERROR_32: string;
};
