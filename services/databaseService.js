import { database } from './appwrite';

const databaseService = {
  async listDocuments(dbId, colId) {
    try {
      const response = await database.listDocuments(dbId, colId);
      return response.documents || [];
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      return { error: error.message };
    }
  },

  async createDocument(dbId, colId, data, id = null) {
    try {
      return database.createDocument(dbId, colId, id || undefined, data);
    } catch (error) {
      console.error('Error creating document', error.message);
      return {
        error: error.message,
      };
    }
  },
};

export default databaseService;
