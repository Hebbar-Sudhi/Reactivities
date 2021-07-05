using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddSwaggerGen(c =>
                       {
                           c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
                       });

            services.AddDbContext<DataContext>(options =>
            {
                //options.UseSqlite(config.GetConnectionString("DefaultConnection"));
                options.UseNpgsql(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", policy =>
                {
                    //policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                    policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddAutoMapper(typeof(ManageProfiles).Assembly);

            return services;
        }
    }
}