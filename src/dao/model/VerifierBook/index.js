module.exports = (sequelize, DataType) => {
    const VerifierBook = sequelize.define('VerifierBook', {
        vBooId: {
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
        verId: {
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
        tableName: 'verifierBook',
        comment: '检验书本'
    });

    return VerifierBook;
}