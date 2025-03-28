import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import developerData from './developerData.json';

// Async thunk for fetching developer data
export const fetchDeveloperById = createAsyncThunk(
  'portfolio/fetchDeveloperById', // ✅ Corrected name
  async (developerId, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      if (!developerData || !developerData.developer) {
        throw new Error('Developer data is missing');
      }

      // Corrected reference to developerData
      const developer = developerData.developer.find(d => d.id === developerId);

      if (!developer) {
        throw new Error('Developer not found');
      }

      return developer;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  developer: null, // ✅ Ensure this matches the selector name
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  currentSection: 'home',
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeveloperById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeveloperById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.developer = action.payload; // ✅ Fixed: Ensure it's stored as `developer`
        state.error = null;
      })
      .addCase(fetchDeveloperById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCurrentSection } = portfolioSlice.actions;

// ✅ Corrected selectors to match the state structure
export const selectDeveloper = (state) => state.portfolio.developer; 
export const selectPortfolioStatus = (state) => state.portfolio.status;
export const selectPortfolioError = (state) => state.portfolio.error;
export const selectCurrentSection = (state) => state.portfolio.currentSection;

export default portfolioSlice.reducer;
