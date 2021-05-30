using AutoMapper;
using Domain;

namespace Application.Core
{
    public class ManageProfiles : Profile
    {
        public ManageProfiles()
        {
            CreateMap<Activity,Activity>();
        }
    }
}