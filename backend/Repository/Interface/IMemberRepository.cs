using backend.Model;

namespace backend.Repository.Interface;

public interface IMemberRepository
{
    string FilePath {get; set;}
    IEnumerable<Member> Get();
    Member Get(int id);
    Member Post(Member member);
    Member Put(Member member);
    string Delete(int id);
}