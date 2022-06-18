const route = require('express').Router();
const { Users } = require('../../db/model');
const { validatePassword, issueJwt, genPassword } = require('../../passport/jwtMiddleware');

route.post('/register', async (req,res) =>{
    // console.log(req.user);
    console.log(req.body);
    const {username,password,firstName,lastName,email,avatarColor,outstandingFee,isAdmin,gender,age,dob,standard,roll,subjects,attendance,mobileNumber,fatherName,fatherOccupation,fatherMobileNumber,motherName,motherOccupation,motherMobileNumber,locality,city,pincode} = req.body;

    try {
        
        const saltNHash = genPassword(password);
        const salt =  saltNHash.salt;
        const hash = saltNHash.hash;
        console.log('entered try block')
        const user = await Users.create({
            username: username,
            salt: salt,
            hash: hash,
            isAdmin: isAdmin,
            firstName: firstName,
            lastName: lastName,
            gender:gender,
            age:age,
            dob:dob,
            email:email,
            avatarColor:avatarColor,
            outstandingFee:outstandingFee,
            standard: standard,
            roll: roll,
            subjects: subjects,
            attendance: attendance,
            mobileNumber: mobileNumber,
            parentDetails: {
                father: {
                    name: fatherName,
                    occupation: fatherOccupation,
                    mobileNumber: fatherMobileNumber,
                },
                mother: {
                    name: motherName,
                    occupation: motherOccupation,
                    mobileNumber: motherMobileNumber,
                },
            },
            address: {
                locality: locality,
                city: city,
                pincode: pincode,
            }
        })
        console.log('user created')
        res.status(200).json({success:true,msg:"New user created"})
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false});
    }
    
})


route.put('/editUser', async (req,res) =>{
    // console.log(req.user);
    console.log(req.body);
    const {username,password,firstName,lastName,isAdmin,gender,age,dob,standard,roll,email,avatarColor,outstandingFee,subjects,attendance,mobileNumber,fatherName,fatherOccupation,fatherMobileNumber,motherName,motherOccupation,motherMobileNumber,locality,city,pincode} = req.body;

    try {
    
        const updatedUser = await Users.findOneAndUpdate({username:username},{
            username: username,
            isAdmin: isAdmin,
            firstName: firstName,
            lastName: lastName,
            gender:gender,
            age:age,
            dob:dob,
            standard: standard,
            roll: roll,
            subjects: subjects,
            email:email,
            avatarColor:avatarColor,
            outstandingFee:outstandingFee,
            attendance: attendance,
            mobileNumber: mobileNumber,
            parentDetails: {
                father: {
                    name: fatherName,
                    occupation: fatherOccupation,
                    mobileNumber: fatherMobileNumber,
                },
                mother: {
                    name: motherName,
                    occupation: motherOccupation,
                    mobileNumber: motherMobileNumber,
                },
            },
            address: {
                locality: locality,
                city: city,
                pincode: pincode,
            }
        },{new:true})
        console.log(updatedUser)
        res.status(200).json({success:true,msg:"User Updated"})
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false});
    }
    
})


module.exports = route;