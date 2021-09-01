'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
      firstname: "Persona1",
      lastname: "Apellido1",
      phone: "00000000",
      email: "persona1@gmail.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      firstname: "Persona2",
      lastname: "Apellido2",
      phone: "11111111",
      email: "persona2@gmail.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }
  ],
  {}
  );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
