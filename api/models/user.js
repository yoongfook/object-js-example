const { Model } = require("./base");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const { Workspace } = require("./workspace");

    return {
      workspace: {
        relation: Model.HasOneRelation,
        modelClass: Workspace,
        join: {
          from: "users.workspaceId",
          to: "workspaces.id"
        }
      }
    };
  }
}

module.exports = {
  User
};
