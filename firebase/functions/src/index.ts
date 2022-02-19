import * as functions from "firebase-functions";
import algoliasearch from "algoliasearch";

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;

const algoliaclient = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

const PRODUCTS_INDEX = "dev_Products";
const CLIENTS_INDEX = "dev_Clients";

exports.onProductCreated = functions.firestore
    .document("products/{productId}")
    .onCreate((snap, context) => {
      const product = snap.data();

      product.objectID = context.params.productId;

      const index = algoliaclient.initIndex(PRODUCTS_INDEX);
      return index.saveObject(product);
    });

exports.onProductDeleted = functions.firestore
    .document("products/{productId}")
    .onDelete((snap, context) => {
      const index = algoliaclient.initIndex(PRODUCTS_INDEX);
      return index.deleteObject(context.params.productId);
    });

exports.onProductUpdated = functions.firestore
    .document("products/{productId}")
    .onUpdate((change, context) => {
      const product = change.after.data();

      product.objectID = context.params.productId;

      const index = algoliaclient.initIndex(PRODUCTS_INDEX);
      return index.partialUpdateObject(product);
    });

exports.onClientCreated = functions.firestore
    .document("clients/{clientId}")
    .onCreate((snap, context) => {
      const client = snap.data();

      client.objectID = context.params.clientId;
      const index = algoliaclient.initIndex("dev_Clients");
      return index.saveObject(client);
    });

exports.onClientDeleted = functions.firestore
    .document("clients/{clientId}")
    .onDelete((snap, context) => {
      const index = algoliaclient.initIndex(CLIENTS_INDEX);
      return index.deleteObject(context.params.clientId);
    });

exports.onClientUpdated = functions.firestore
    .document("client/{clientId}")
    .onUpdate((change, context) => {
      const client = change.after.data();

      client.objectID = context.params.clientId;

      const index = algoliaclient.initIndex(CLIENTS_INDEX);
      return index.partialUpdateObject(client);
    });
