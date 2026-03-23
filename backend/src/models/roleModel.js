
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
    {
        roleName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        isActive: {
            type: Boolean,
            default: true, 
        },
    },
    {
        timestamps: true, 
        versionKey: false,
    }
);



// Export the model
const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);


// const seedRoles = async () => {
//   const count = await Role.countDocuments();

//   if (count === 0) {
//     await Role.insertMany([
//       { roleName: "frontend developer" },
//       { roleName: "backend developer" },
//       { roleName: "full stack developer" },
//       { roleName: "devops engineer" },
//       { roleName: "data analyst" }
//     ]);

//     console.log("Default roles inserted");
//   }
// };

// seedRoles();
module.exports = Role;
