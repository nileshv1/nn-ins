import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface authStateFlag {
  // Define your expected properties here
  isLoading: string;
  isError: string | undefined;
  flagsData: Array<{ color: string; backgroundColor: string }>;
}

const authState:authStateFlag = {
    isLoading: "false",
    isError: "",
    flagsData: []
  }
  

export const flagSlice = createSlice({
    name: "flags",
    initialState: authState,
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder.addCase(getFlagData.pending, (state, action) => {
        state.isLoading = "true";
      });
      builder.addCase(getFlagData.rejected, (state, action) => {
        state.isLoading = "Rejected";
        state.isError = action.error.message;
      });
      builder.addCase(getFlagData.fulfilled, (state, action) => {
        state.isLoading = "Completed";
        // console.log(action,"action")
        state.flagsData = action.payload;
      });
    },
  });
  export const getFlagData:any = createAsyncThunk(
    "getFlagData",
    async (params, thunkAPI) => {
      let result = await fetch(
        'http://localhost:4000/flag',
        {
          method: "GET",
          headers: {
            Authorization: {},
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Encoding":
              "gzip" | "compress" | "deflate" | "br" | "identity" | "*",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => data)
        .then((error) => error);
        console.log(result, "result")
      return result;
    }
  );

  export const {
    
  } = flagSlice.actions;
  
  export const flagReducer = flagSlice.reducer;