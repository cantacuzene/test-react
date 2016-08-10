using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Entities;

namespace test_react.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        // GET api/policies
        [HttpGet]
        public IEnumerable<PolicyEntity> Get()
        {
            return new PolicyEntity[] {
                new PolicyEntity() { InternalReference="INT0001",Id=1, ExtentionData = new  PolicyAXADataExtention() { ReferenceMacao="MACAO0001", Id=1 } },
                new PolicyEntity() { InternalReference="INT0002",Id=2, ExtentionData = new  PolicyGroupamaDataExtention() { ReferenceGroupama="GROUPAMA0001", Id=2 } },
                new PolicyEntity() { InternalReference="INT0003",Id=3, ExtentionData = new  PolicyAXADataExtention() { ReferenceMacao="MACAO0002", Id=3 } },
                new PolicyEntity() { InternalReference="INT0004",Id=4, ExtentionData = new  PolicyGroupamaDataExtention() { ReferenceGroupama="GROUPAMA0002", Id=4 } },
                

            };
        }

        // GET api/policies/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/policies
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/policies/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/policies/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
