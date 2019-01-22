import { YEAR } from '../helpers/Date';

declare var require: any;
let Datastore = require('nedb');

var dataB = "database" + YEAR.toString() + ".db";

export class Database {

    constructor() {
        this.db = new Datastore({
            filename: dataB,
            autoload: true
        });
    }

    public db: any;

    //---------------------------------------------------------------
    //CRUD NeDB
    //---------------------------------------------------------------

    insert(item: any) {
        return new Promise((resolve, reject) => {
            return this.db.insert(item, ((err: any, newItem: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(newItem);
                }
            }))
        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
            return this.db.find({}, { projection: { _id: 0 } }, ((err: any, items: any) => {
                if (err) {
                    reject(err);
                }
                else {

                    resolve(items);
                }
            }));
        })
    }

    remove(idrow: string, month: string, nombre: string, precio: string, fecha: string) {
        let obj = {
            idrow: idrow,
            mes: month,
            nombre: nombre,
            precio: precio,
            fecha: fecha
        }

        return new Promise((resolve, reject) => {
            return this.db.remove(obj, ((err: any, numRemoved: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(numRemoved);
                }
            }));
        })
    }

    findMonth(filter: any) {
        return new Promise((resolve, reject) => {
            return this.db.find({ mes: filter }, { projection: { _id: 0 } }, ((err: any, items: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(items);
                }
            }));
        })
    }
}
