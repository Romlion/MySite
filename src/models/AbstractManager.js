// Import database client
import database from "../../database/client";

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    // Store the table name
    this.table = table;

    // Provide access to the database client
    this.database = database;
  }
}

// Ready to export
export default AbstractManager;