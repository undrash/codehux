class CodeHux {
  routes = {};
  queues = {};
  jobs = {};
  auth = {};

  post = (path, ...middleware) => {
    this.routes[`POST ${path}`] = middleware;
  };

  get = (path, ...middleware) => {
    this.routes[`GET ${path}`] = middleware;
  };

  put = (path, ...middleware) => {
    this.routes[`PUT ${path}`] = middleware;
  };

  delete = (path, ...middleware) => {
    this.routes[`DELETE ${path}`] = middleware;
  };

  auth = (path, ...middleware) => {
    this.auth[path] = middleware;
  };

  queue = (topic, ...middleware) => {
    this.queues[topic] = middleware;
  };

  job = (cronExpression, ...middleware) => {
    this.jobs[cronExpression] = middleware;
  };

  init = () => {
    return {
      routehooks: this.routes,
      queuehooks: this.queues,
      jobhooks: this.jobs,
      authhooks: this.auth,
    };
  };
}

module.exports = () => new CodeHux();
