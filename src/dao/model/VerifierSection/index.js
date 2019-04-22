module.exports = (sequelize, DataType) => {
    const VerifierSection = sequelize.define('VerifierSection', {
        vSecId: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true,
            COMMENT: '检验章节id'
        },
        bookId: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '书籍id'
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '章节标题'
        },
        status: {
            type: DataType.STRING,
            allowNull: false,
            COMMENT: '状态'
        }
    },{
        timestamps: true,
        tableName: 'verifierSection',
        comment: '检验章节'
    });

    return VerifierSection;
}