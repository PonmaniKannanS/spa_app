using backend.Model;
using backend.Repository.Interface;
using Newtonsoft.Json;

namespace backend.Repository;

public class MemberRepository : IMemberRepository
{
    public string FilePath { get; set; }

    public string Delete(int id)
    {
        var list = new List<Member>();
        using (StreamReader r = new StreamReader(FilePath))
        {
            string json = r.ReadToEnd();
            list = JsonConvert.DeserializeObject<List<Member>>(json);
            var del = list?.FirstOrDefault(x=> x.ID == id);
            if(del != null)
               list?.Remove(del);
        }
        string jsonData = JsonConvert.SerializeObject(list);
        System.IO.File.WriteAllText(FilePath, jsonData);
        return "Ok";
    }

    public IEnumerable<Member> Get()
    {
        var list = new List<Member>();
        using (StreamReader r = new StreamReader(FilePath))
        {
            string json = r.ReadToEnd();
            list = JsonConvert.DeserializeObject<List<Member>>(json);
        }
        return list ?? new List<Member>();  
    }

    public Member Get(int id)
    {
        var list = new List<Member>();
        using (StreamReader r = new StreamReader(FilePath))
        {
            string json = r.ReadToEnd();
            list = JsonConvert.DeserializeObject<List<Member>>(json);
        }
        return list.FirstOrDefault(x=> x.ID == id);  
    }

    public Member Post(Member member)
    {
        var list = new List<Member>();
        using (StreamReader r = new StreamReader(FilePath))
        {
            string json = r.ReadToEnd();
            list = JsonConvert.DeserializeObject<List<Member>>(json);
            member.ID = list?.Count + 1 ?? 1;
        }
        list?.Add(member);
        string jsonData = JsonConvert.SerializeObject(list);
        System.IO.File.WriteAllText(FilePath, jsonData);
        return member;
    }

    public Member Put(Member member)
    {
        var list = new List<Member>();
        using (StreamReader r = new StreamReader(FilePath))
        {
            string json = r.ReadToEnd();
            list = JsonConvert.DeserializeObject<List<Member>>(json);
            var updateMem = list?.FirstOrDefault(x=> x.ID == member.ID);
            if(updateMem != null)
            {
                updateMem.FirstName = member.FirstName;
                updateMem.LastName = member.LastName;
                updateMem.MiddleName = member.MiddleName;
                updateMem.Age = member.Age;
                updateMem.Gender = member.Gender;
            }

        }
        string jsonData = JsonConvert.SerializeObject(list);
        System.IO.File.WriteAllText(FilePath, jsonData);
        return member;
    }
}