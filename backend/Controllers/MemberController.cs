using Microsoft.AspNetCore.Mvc;
using backend.Model;
using Newtonsoft.Json;
using System.IO;
using backend.Repository.Interface;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class MemberController : ControllerBase
{
    private readonly IWebHostEnvironment _hostingEnvironment;
    private readonly ILogger<MemberController> _logger;
    private readonly IMemberRepository _repository;

    public MemberController(ILogger<MemberController> logger, IWebHostEnvironment hostingEnvironment, IMemberRepository repository)
    {
        _logger = logger;
        _hostingEnvironment = hostingEnvironment;
        _repository = repository;
        var rootPath = _hostingEnvironment.ContentRootPath; //get the root path
        var fullPath = Path.Combine(rootPath, "Storage/db.json");
        _repository.FilePath = fullPath;
    }

    [HttpGet]
    public IEnumerable<Member> Get()
    {
        return _repository.Get();
    }
    
    [HttpGet("{Id}")]
    public Member Get(int id)
    {
        return _repository.Get(id);
    }

    [HttpPost]
    public Member Post([FromBody] Member member)
    {
        return _repository.Post(member);
    }

    [HttpPut]
    public Member Put([FromBody] Member member)
    {
        return _repository.Put(member);
    }

    [HttpDelete("{Id}")]
    public string Delete(int id)
    {
        return _repository.Delete(id);
    }
}