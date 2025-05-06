const User = require('../models/user.model');

// جلب جميع المستخدمين
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// جلب مستخدم بواسطة الـ ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'المستخدم غير موجود' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// إضافة مستخدم جديد
exports.addUser = async (req, res) => {
    const { name, email, password, phoneNumber, address } = req.body;
    const newUser = new User({
        name,
        email,
        password,
        phoneNumber,
        address
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        if (error.code === 11000) {
            // خطأ डुप्लिकेट كي (Duplicate Key Error) للبريد الإلكتروني أو الـ ID الفريد
            return res.status(400).json({ message: 'البريد الإلكتروني مسجل بالفعل' });
        }
        res.status(400).json({ message: error.message });
    }
};

// تحديث بيانات مستخدم
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                updatedAt: Date.now() // تحديث تاريخ التعديل
            },
            { new: true, runValidators: true } // إرجاع الكائن المُعدل وتشغيل عمليات التحقق
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'المستخدم غير موجود' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            return res.status(400).json({ message: 'البريد الإلكتروني مُدخل بالفعل' });
        }
        res.status(400).json({ message: error.message });
    }
};

// حذف مستخدم
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'المستخدم غير موجود' });
        }
        res.status(200).json({ message: 'تم حذف المستخدم بنجاح' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
