import { ClientSession, FilterQuery, Model, UpdateQuery } from 'mongoose';

export class BaseMongoRepository<T> {
  protected model: Model<T, {}>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async insert(input: T, session?: ClientSession) {
    return new this.model(input).save({ session }).catch((e) => {
      new Error(e);
    });
  }

  async updateOne(filter: FilterQuery<T>, input: UpdateQuery<T>, session?: ClientSession) {
    return this.model
      .findOneAndUpdate(filter, input, { new: true, session })
      .exec()
      .then((res) => {
        if (!res) {
          throw new Error('unable to update record for conditions: ' + JSON.stringify(filter));
        }
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
