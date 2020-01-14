﻿// Decompiled with JetBrains decompiler
// Type: CloudX.Shared.Member
// Assembly: CloudX.Shared, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 6223B97A-06A5-46CB-9E10-78604961D6EE
// Assembly location: J:\D\SteamLibrary\steamapps\common\NeosVR\HeadlessClient\CloudX.Shared.dll

using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace CloudX.Shared
{
  public class Member
  {
    [JsonProperty(PropertyName = "id")]
    [JsonPropertyName("id")]
    public string UserId { get; set; }

    [JsonProperty(PropertyName = "ownerId")]
    [JsonPropertyName("ownerId")]
    public string GroupId { get; set; }

    [JsonProperty(PropertyName = "quotaBytes")]
    [JsonPropertyName("quotaBytes")]
    public long QuotaBytes { get; set; }

    [JsonProperty(PropertyName = "usedBytes")]
    [JsonPropertyName("usedBytes")]
    public long UsedBytes { get; set; }
  }
}
