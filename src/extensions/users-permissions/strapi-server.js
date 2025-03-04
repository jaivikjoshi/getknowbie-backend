module.exports = (plugin) => {
  plugin.controllers.role.updateRole = async (ctx) => {
    if (ctx.request.body.role.type === 'public') {
      ctx.request.body.role.permissions = {
        ...ctx.request.body.role.permissions,
        'api::blog.blog': {
          controllers: {
            blog: {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        }
      };
    }
    
    const response = await strapi.plugin('users-permissions').service('role').updateRole(ctx.params.role, ctx.request.body);
    
    ctx.send(response);
  };

  return plugin;
};
