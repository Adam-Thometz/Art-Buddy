class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, val) {
    this.store[key] = JSON.stringify(val);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export default LocalStorageMock;